<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact us</title>
</head>
<body>
    <h1 style="color: #c06508">'{{ $user_email }}' submitted the form from your 'CONTACT US' page </h1>
    <br>
    <div style="width: 100%; border-top: 1px dotted black"></div>
    <br>
    <p>A user has submitted the contact form on your store.</p>
    <br>
    <h3 style="color: #ac733a">Here are their details</h3>
    <br>
        <div style="width: 300px">
            <div style="float: left; font-weight: bold">Full Name:</div>
            <div style="float: right">{{ $variables['name'] }}</div>
        </div>
        <div style="clear: both"></div>
        <br>
        <div style="width: 300px">
            <div style="float: left; font-weight: bold">Email Address:</div>
            <div style="float: right">{{ $variables['email'] }}</div>
        </div>
        <div style="clear: both"></div>
        <br>
        <div style="width: 300px">
            <div style="float: left; font-weight: bold">Phone Number:</div>
            <div style="float: right">{{ $variables['phone'] }}</div>
        </div>
        <div style="clear: both"></div>
        <br>
        <div style="width: 300px">
            <div style="float: left; font-weight: bold; margin-right: 10px;">Message:</div>
            <div style="float: right">{{ $variables['message'] }}</div>
        </div>
        <div style="clear: both"></div>
        <br>
    <h3>CRUISER ADDICTION - TOYOTA OEM LANDCRUISER 4X4 PARTS </h3>
    <a href="http://cruiseraddiction.com">http://cruiseraddiction.com/</a>
    <hr>
    CRUISER ADDICTION TOYOTA OEM LANDCRUISER 4X4 PARTS is powered by BigCommerce.  Launch your own store for free with BigCommerce.
</body>
</html>