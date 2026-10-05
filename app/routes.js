// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/answer-symptoms', function (req, res) {
  const data = req.session.data
  const symptoms = data.symptoms

  if (symptoms === "Yes") {

    res.redirect('/details')

  } else if (symptoms === "No") {

    res.redirect('/ineligible')

  } else if (symptoms === "I'm not sure") {

    res.redirect('/details')

  } else {

    // No answer selected, return to question
    res.redirect('/symptoms')

  }
})









module.exports = router
