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
<!-- <span class="pagenum"></span> -->
	<h1>Cruiser Addiction</h1>
	<p>currency : {{ $currency }}</p>
	<p>show_13_percent - {{ $show_13_percent }}</p>
	<p>show_information_company - {{ $show_information_company }}</p>
	<p>order number(invoice number) : {{ $order_id }}</p>
	<p>user name - {{ $user_first_name }}</p>
	<p>user last name - {{ $user_last_name }}</p>
	<p>user email - {{ $user_email }}</p>
	<p>user phone number - {{ $user_phone_number }}</p>
	<p>user phone counrty code - {{ $user_phone_countryCode }}</p>
	<p>user city - {{ $user_city }}</p>
	<p>user state - {{ $user_state }}</p>
	<p>user postal code - {{ $user_postal_code }}</p>
	<p>user_street_address - {{ $user_street_address }}</p>
	<p>user_street_address_two - {{ $user_street_address_two }}</p>
	<p>invoice_date - {{ $invoice_date }}</p>
	<p>total_quantity_ordered - {{ $total_quantity_ordered }}</p>
	<p>total_price_order - {{ $total_price_order }}</p>
	<p>shipping_total_price - {{ $shipping_total_price }}</p>
	<p>subtotal - {{ $subtotal }}</p>
	<p>taxe_price - {{ $taxe_price }}</p>
	<p>Order info : </p>
	@foreach(json_decode($orderInfo, true) as $order)
		<p>order total price - {{ $order["total_price"] }}</p>
		<p>order qty - {{ $order["qty"] }}</p>
		<p>order price - {{ $order["price"] }}</p>
		<p>order description - {{ $order["description"] }}</p>
		<p>order warehouse - {{ $order["warehouse"] }}</p>
		<p>order brand name - {{ $order["brand_name"] }} </p>
		<p>order part number - {{ $order["part_number"] }}</p>
	@endforeach

	<script type="text/php">
    if (isset($pdf)) {
        $text = "Page {PAGE_NUM} / {PAGE_COUNT}";
        $size = 10;
        $font = $fontMetrics->getFont("Verdana");
        $width = $fontMetrics->get_text_width($text, $font, $size) / 2;
        $x = ($pdf->get_width() - $width);
        $y = $pdf->get_height() - 60;
		$color = array(211 / 255, 211 / 255, 211 / 255);
        $pdf->page_text($x, $y, $text, $font, $size, $color);
    }
	</script>

</body>
</html>