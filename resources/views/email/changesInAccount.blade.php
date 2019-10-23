<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Changes In Account</h1>
    <p>Your : </p>
        @foreach($changes as $key => $change)
            {{$key}}
        @endforeach
    @if(count($changes) > 1)
        <p>were changed successfully</p>
    @elseif(count($changes) <= 1)
        <p>was changed successfully</p>
    @endif
</body>
</html>