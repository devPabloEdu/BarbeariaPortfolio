const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Adicione esta linha

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, phone, date, time, endereco } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `agendamentosbarbearia48@gmail.com`,
            pass: `qhxl omzt bwpn tdhs`
        }
    });

    const mailOptions = {
        from: 'agendamentosbarbearia48@gmail.com',
        to: 'eduardopablo460@gmail.com',
        subject: 'Agendamento',
        text: `Nome: ${name}\nTelefone: ${phone}\nData do Agendamento: ${date}\nHorário do Agendamento: ${time}\nEndereço: ${endereco}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('E-mail enviado com sucesso!');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
