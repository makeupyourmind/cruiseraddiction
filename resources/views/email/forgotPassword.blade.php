@component('mail::message')

Please click on button to continue

@component('mail::button', ['url' => $content['url'] ])
{{ $content['button'] }}
@endcomponent

Thanks<br>
@endcomponent