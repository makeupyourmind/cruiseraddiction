<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<p>Hello</p>
@foreach($data as $element)
    <p> The part number <a href="{{$element['link']}}">{{ $element['full_part_number'] }}</a> is back in stock in Warehouse {{ $element['warehouse_number'] }}.</p>
    <p>If you are still interested in purchasing this item, please click on the part number and 
            you will be redirected to our website where you can make a purchase.</p>
@endforeach
<p>
This is a one-time notification. If you need to order more quantity, please use the notification icon again.  
If you have any questions, please do not hesitate to contact us through Contact Us form on our website. Please do not reply to this message
</p>
<p>
Best regards,
Cruiser Addiction Team
</p>

</body>
</html>