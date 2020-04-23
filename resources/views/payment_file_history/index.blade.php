<!DOCTYPE html>
<html>
<head>
    <title>Hi</title>
</head>

<style>
    .pagenum:before {
        content: counter(page);
    }
</style>
<body>
<div style="float: left">
    <h3>CRUISER ADDICTION</h3>
    <div>918-625 KIPPS LANE</div>
    <div>LONDON ON, N5Y 0B2</div>
    <div>CANADA</div>
    <br>
    <div>Phone: +1 (519) 914-1685</div>
    <div>info@cruiseraddiction.com</div>
    <div>www.cruiseraddiction.com</div>
    <br>
    @if($show_information_company)
        <div style="margin-bottom: 20px;">GST/HST: 821538303RT0001</div>
    @endif
</div>
<div style="float: right;width: 250px;">
    <h1 style="color: #a6a6a6;margin-bottom: 5px;text-align: right;">INVOICE</h1>
    <div style="background: #3ab050; color: #ffffff; padding: 5px; width: 60%; text-align: center; border-radius: 10px;float: right;">PAID</div>
    <br>
    <br>
    <br>
    <div style="text-align: right; font-size: 20px">Invoice #: {{ $order_id }}</div>
    <div style="text-align: right; font-size: 20px">Invoice Date: {{ $invoice_date }}</div>
</div>

<div style="clear: both;"></div>

<hr style="	margin: 20px 0;
	padding: 0;
	height: 0;
	border: none;
	border-top: 1px solid black;
	background: white;">
<div>
    <div>Bill to:</div>
    <div>{{$user_first_name}} {{$user_last_name}}</div>
    <div>{{ $user_street_address }}</div>
    <div>{{ $user_city }}, {{ $user_state }} {{ $user_postal_code }}</div>
    <div>{{ $user_country }}</div>
    <div>{{ $user_phone_number }}</div>
    <div>{{ $user_email }}</div>
</div>
<br>
<table style="width: 100%;border-collapse: collapse">
    <tr>
        <th style="background: lightgray;border-bottom: 1px solid black;border-top: 1px solid black;width: 70px;border-left: 1px solid black; text-align: left">Brand</th>
        <th style="background: lightgray;border-bottom: 1px solid black;border-top: 1px solid black;width: 120px; text-align: left">Part number</th>
        <th style="background: lightgray;border-bottom: 1px solid black;border-top: 1px solid black; text-align: left">Description</th>
        <th style="background: lightgray;border-bottom: 1px solid black;border-top: 1px solid black; text-align: right">Quantity</th>
        <th style="background: lightgray;border-bottom: 1px solid black;border-top: 1px solid black; text-align: right">Price</th>
        <th style="background: lightgray;border-bottom: 1px solid black;border-top: 1px solid black; text-align: right">Amount</th>
        <td style="background: lightgray;border-bottom: 1px solid black;border-top: 1px solid black;border-right: 1px solid black; width: 20px;"><span style="color:lightgray">tt</span></td>
    </tr>

@foreach(json_decode($orderInfo, true) as $order)
    <tr>
        <td style="border-bottom: 1px solid black;white-space: pre-wrap;text-align: left">{{ $order["brand_name"] }}</td>
        <td style="border-bottom: 1px solid black;white-space: pre-wrap;text-align: left">{{ $order["part_number"] }}</td>
        <td style="border-bottom: 1px solid black;white-space: pre-wrap;text-align: left">{{ $order["description"] }}</td>
        <td style="border-bottom: 1px solid black;white-space: pre-wrap; text-align: right">{{ $order["qty"] }}</td>
        <td style="border-bottom: 1px solid black;white-space: pre-wrap; text-align: right">${{ round($order["price"] * $exchange, 2) }}</td>
        <td style="border-bottom: 1px solid black;white-space: pre-wrap; text-align: right">${{ round($order["total_price"] * $exchange, 2) }}</td>
        <td style="border-bottom: 1px solid black;white-space: pre-wrap;"> W{{ $order["warehouse"] }}</td>
    </tr>
@endforeach

    <tr>
        <td style="border-bottom: 1px solid white;border-top:1px solid black;white-space: pre-wrap;"><span style="color:white">tt</span></td>
        <td style="border-bottom: 1px solid white;border-top:1px solid black;white-space: pre-wrap;"><span style="color:white">tt</span></td>
        <td style="border-bottom: 1px solid white;border-left:1px solid black;border-top:1px solid black;white-space: pre-wrap;">Subtotal</td>
        <td style="border-bottom: 1px solid white;border-top:1px solid black;white-space: pre-wrap;">{{ $total_quantity_ordered }}</td>
        <td style="border-bottom: 1px solid white;border-top:1px solid black;white-space: pre-wrap;"></td>
        <td style="border-bottom: 1px solid white;border-top:1px solid black;white-space: pre-wrap;">${{ round($subtotal, 2) }}</td>
        <td style="border-bottom: 1px solid white;border-top:1px solid black;border-right:1px solid black;white-space: pre-wrap;"></td>
    </tr>
    <tr>
        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>
        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>
        <td style="border-left:1px solid black;text-align: left">Shipping W1</td>
        <td></td>
        <td></td>
        <td  style="text-align: left">${{ $shipping_total_price }}</td>
        <td  style="border-right:1px solid black"></td>
    </tr>
{{--    <tr>--}}
{{--        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>--}}
{{--        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>--}}
{{--        <td  style="border-left:1px solid black;">Shipping W2</td>--}}
{{--        <td ></td>--}}
{{--        <td ></td>--}}
{{--        <td >$79.99</td>--}}
{{--        <td  style="border-right:1px solid black"></td>--}}
{{--    </tr>--}}
    @if($show_13_percent)
    <tr>
        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>
        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>
        <td  style="border-left:1px solid black;text-align: left">ON-HST ({{$tax_rate}}%)</td>
        <td ></td>
        <td ></td>
        <td style="text-align: right">${{ $taxe_price }}</td>
        <td  style="border-right:1px solid black"></td>
    </tr>
    @endif
    <tr>
        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>
        <td style="border-bottom: 1px solid white"><span style="color:white">tt</span></td>
        <th style="border-bottom: 1px solid black;border-left:1px solid black;text-align: left">TOTAL</th>
        <th style="border-bottom: 1px solid black"></th>
        <th style="border-bottom: 1px solid black"></th>
        <th style="border-bottom: 1px solid black;text-align: right">${{ $total_price_order }}</th>
        <th style="border-bottom: 1px solid black;border-right:1px solid black;text-align: right">{{ $currency }}</th>
    </tr>
</table>
<br>
<br>
<br>
<hr style="	margin: 20px 0;
	padding: 0;
	height: 0;
	border: none;
	border-top: 1px solid black;
	background: white;">
<br>
<br>
<div>Terms and Conditions</div>
<br>
<br>
<div>Returns  and Shipping policies are available: www.cruiseraddiction.com/shipping-returns</div>
<div>Warranty policy is available: www.cruiseraddiction.com/warranty</div>
<div>You agreed to tems and condition at a checkout</div>
<br>
<div><h2><em>THANK YOU FOR YOUR BUSINESS!</em></h2></div>
<!-- <span class="pagenum"></span> -->
{{--	<h1>Cruiser Addiction</h1>--}}
{{--	<p>currency : {{ $currency }}</p>--}}
{{--	<p>show_13_percent - {{ $show_13_percent }}</p>--}}
{{--	<p>show_information_company - {{ $show_information_company }}</p>--}}
{{--	<p>order number(invoice number) : {{ $order_id }}</p>--}}
{{--	<p>user name - {{ $user_first_name }}</p>--}}
{{--	<p>user last name - {{ $user_last_name }}</p>--}}
{{--	<p>user email - {{ $user_email }}</p>--}}
{{--	<p>user phone number - {{ $user_phone_number }}</p>--}}
{{--	<p>user phone counrty code - {{ $user_phone_countryCode }}</p>--}}
{{--	<p>user city - {{ $user_city }}</p>--}}
{{--	<p>user state - {{ $user_state }}</p>--}}
{{--	<p>user postal code - {{ $user_postal_code }}</p>--}}
{{--	<p>user_street_address - {{ $user_street_address }}</p>--}}
{{--	<p>user_street_address_two - {{ $user_street_address_two }}</p>--}}
{{--	<p>invoice_date - {{ $invoice_date }}</p>--}}
{{--	<p>total_quantity_ordered - {{ $total_quantity_ordered }}</p>--}}
{{--	<p>total_price_order - {{ $total_price_order }}</p>--}}
{{--	<p>shipping_total_price - {{ $shipping_total_price }}</p>--}}
{{--	<p>subtotal - {{ $subtotal }}</p>--}}
{{--	<p>taxe_price - {{ $taxe_price }}</p>--}}
{{--	<p>Order info : </p>--}}
{{--	@foreach(json_decode($orderInfo, true) as $order)--}}
{{--		<p>order total price - {{ $order["total_price"] }}</p>--}}
{{--		<p>order qty - {{ $order["qty"] }}</p>--}}
{{--		<p>order price - {{ $order["price"] }}</p>--}}
{{--		<p>order description - {{ $order["description"] }}</p>--}}
{{--		<p>order warehouse - {{ $order["warehouse"] }}</p>--}}
{{--		<p>order brand name - {{ $order["brand_name"] }} </p>--}}
{{--		<p>order part number - {{ $order["part_number"] }}</p>--}}
{{--	@endforeach--}}

<script type="text/php">
    if (isset($pdf)) {
        $text = "Page: {PAGE_NUM} / {PAGE_COUNT}";
        $size = 10;
        $font = $fontMetrics->getFont("Verdana");
        $width = $fontMetrics->get_text_width($text, $font, $size) / 2;
        $x = ($pdf->get_width() - $width);
        $y = $pdf->get_height() - 60;
		$color = array(169 / 255, 169 / 255, 169 / 255);
        $pdf->page_text($x, $y, $text, $font, $size, $color);
    }

</script>

</body>
</html>
