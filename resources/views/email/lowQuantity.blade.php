<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Low Quantity</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Brand_name</th>
                <th>Part number</th>
                <th>Qty</th>
            </tr>
            <tr>
        </thead>
        <tbody>
            @for($i = 0; $i < count($parts); $i++)
                <tr>
                    <td>{{$parts[$i]["brand_name"]}}</td>
                    <td>{{$parts[$i]["part_number"]}}</td>
                    <td>{{$parts[$i]["qty"]}}</td>
                </tr>
            @endfor
        </tbody>
    </table>
</body>
</html>