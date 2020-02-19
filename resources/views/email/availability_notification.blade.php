<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<p>We have good news!</p>
@foreach($data as $element)
    <p>{{$element['brand_name']}} {{ $element['description'] }} {{ $element['full_part_number'] }} 
    is back in stock. Please click on the link bellow or on the part number.</p>
    <p><a href="{{$element['link']}}">{{$element['link']}}</a></p>
@endforeach
<p>This is a one-time notification.</p>
<p>If you have any other questions feel free to contact us at <a href="info@cruiseraddiction.com">info@cruiseraddiction.com</a></p>
<p>Thank you for your business!</p>
<p>Cruiser Addiction Team</p>

</body>
</html>