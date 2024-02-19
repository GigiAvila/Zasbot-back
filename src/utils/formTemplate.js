const FORMINFORMATIONTEMPLATE = (data) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background-color: #1E1E1E;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #2d2d2d;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #FFD700;
        }

        h2 {
            color: #f2f2f2;
        }

        form {
            margin-top: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #f2f2f2;
        }

        input, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border-radius: 4px;
            background-color: #1E1E1E;
            color: #f2f2f2;
            border: none;
        }

        textarea {
            resize: none;
            background-color: #1E1E1E;
            color: #f2f2f2;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Gracias por contactarnos</h1>
        <h2>¡Nos comunicaremos en breve!</h2>
        <form> 
            <label for="name">Nombre</label>
            <input type="text" name="name" value="${data.name}" readOnly>

            <label for="company">Empresa</label>
            <input type="text" name="company" value="${data.company}" readOnly>

            <label for="email">Correo</label>
            <input type="text" name="email" value="${data.email}" readOnly>

            <label for="phone">Teléfono</label>
            <input type="text" name="phone" value="${data.phone}" readOnly>

            <label for="contactText">Consulta</label>
            <textarea name="contact" value="${data.contactText}" readOnly>${data.contactText}</textarea>
        </form>
    </div>
</body>
</html>
`

module.exports = { FORMINFORMATIONTEMPLATE }
