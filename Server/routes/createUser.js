const express = require('express')
const User = require('../models/user')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwtSecret = 'mynameisblablabla'

const router = express.Router()


router.post("/createuser",
    //validation
    [
        body('email', 'invalid email format').isEmail(),
        body('name', 'short name length').isLength({ min: 7 }),
        body('password', 'short password length').isLength({ min: 5 })],



    async (req, res) => {
        //if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10)
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                location: req.body.location
            })
            res.json({ success: true })

        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

router.post("/login",
    //validation
    [
        body('email', 'invalid email format').isEmail(),
        body('password', 'short password length').isLength({ min: 5 })],


    async (req, res) => {

        //if errors in validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email
        try {
            let userData = await User.findOne({email})
            if (!userData) {
                return res.status(400).json({ error: 'invalid email' })
            }
            const comparedPassword = await bcrypt.compare(req.body.password, userData.password)
            if (!comparedPassword) {
                return res.status(400).json({ error: 'invalid password' })
            }


            const data = {
                user:{
                    id : userData._id
                }
            }
            const authToken = jwt.sign(data, jwtSecret)

            return res.json({ success: true, authToken:authToken })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })


module.exports = router