const router = require('express').Router()
const formidable = require('formidable')
const fs = require('fs')
const path = require('path')

router.get('/media', async (req, res) => {
  const { type, file } = req.query

  try {

    if (file) {
      res.send({ response: true, data: fs.readFileSync(path.join(__dirname, '../public/media/' + file)) })
      return
    }

    const l = fs.readdirSync(path.join(__dirname, '../public/media'))

    res.send({ response: true, data: l.filter(i => i.startsWith(type)) })

  } catch (err) {
    console.log(err)
    res.send({ response: false, message: 'Error' })
  }
})

router.post('/media/upload', async (req, res) => {
  try {

    const form = new formidable.IncomingForm()
    form.uploadDir = publicCachePath

    await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (!files?.file) {
          reject()
          return
        }

        try {
          fs.renameSync(files.file.path, path.join(__dirname, '../public/media') + '/' + files.file.name)
          resolve()
        } catch (err) {
          fs.unlinkSync(files.file.path)
          reject()
        }
      })
    })

    res.send({ response: true })

  } catch (err) {
    console.log(err)
    res.send({ response: false, message: 'Error' })
  }
})

module.exports = router