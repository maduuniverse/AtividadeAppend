<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="numero">Adicionar Número</button>

    <div id="area"></div>

    <script>

        let numero = 1;

        document.getElementById("numero")
            .addEventListener("click", function () {

                const p = document.createElement("p");

                p.textContent = numero;

                document.getElementById("area")
                    .appendChild(p);

                numero++;

            });

    </script>
</body>

</html>
