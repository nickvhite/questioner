<?php

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$rooms_kount = implode(", ", $data[0]['rooms_kount']);
$dead_line = implode(", ", $data[0]['dead_line']);
$city_district = implode(", ", $data[0]['city_district']);
$beside_home = implode(", ", $data[0]['beside_home']);
$area = 'от: ' . $data[0]['area']['from'] . ', до: ' . $data[0]['area']['to'];
$price = 'от: ' . $data[0]['price']['from'] . ', до: ' . $data[0]['price']['to'];
$phone = $data[0]['phone'];
$eMail = $data[0]['eMail'];

$to = 'nickvhite@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Ответ'; //Загаловок сообщения
$date = date("d.m.y"); // число.месяц.год
$time = date("H:i"); // точное время
$message =
    'Дата и время: ' . $date . ' ' . $time . '
	 Нужна планировка: ' . $rooms_kount . '
     Хочу заехать: ' . $dead_line . '
	 В район: ' . $city_district . '
	 Возле дома: ' . $beside_home . '
	 Площадь: ' . $area . '
	 Цена: ' . $price . '
	 Номер телефона: ' . $phone . '
	 E-MAIL: ' . $eMail;//Текст нащего сообщения можно использовать HTML теги
echo $message;
//$headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
////$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
//mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>