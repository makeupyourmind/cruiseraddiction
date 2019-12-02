<?php

namespace App\Exports;

use App\Model\Order;
use App\Model\OrderNumber;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeWriting;
use Maatwebsite\Excel\Events\BeforeSheet;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\BeforeExport;

class OrdersExport implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    use Exportable, RegistersEventListeners;

    public function __construct($orders)
    {
        $this->orders = $orders;
    }

    public function collection()
    {
        Order::where('isCheckedParser', 0)->update(['isCheckedParser' => 1]);
        $collect = [];
        foreach ($this->orders as $order){
            foreach($order->data as $data){
                if($data['warehouse'] != 'canada' || $data['warehouse'] != 'usa'){
                    $temp =  [
                        'BrandName' => $data["brand_name"],
                        'PartNumber' => $data["part_number"],
                        'qty' => $data["count"],
                        'price' => $data["price"],
                        'price tolerance' => '15',
                        'replaces' => 'ONLY THIS #',
                        'warehouse' => 'JA',
                        'note' => '',
                        'DescriptionEnglish' => $data["description_english"],
                        'DescriptionRussian' => '',
                        'Column 1' => $order['id'],
                        'Column 2' => $data["unique_hash"],
                        'Column 3' => '',
                        'Column 4' => '',
                        'Barcode' => '',
                        'Information 1' => $order['id'],
                        'Information 2' => '',
                    ];
                    array_push($collect, $temp);
                }
            }
        }
        $empties = [
            [
                'BrandName' => '',
                'PartNumber' => '',
                'qty' => '',
                'price' => '',
                'price tolerance' => '',
                'replaces' => '',
                'warehouse' => '',
                'note' => '',
                'DescriptionEnglish' => '',
                'DescriptionRussian' => '',
                'Column 1' => '',
                'Column 2' => '',
                'Column 3' => '',
                'Column 4' => '',
                'Barcode' => '',
                'Information 1' => '',
                'Information 2' => '',
            ],
            [
                'BrandName' => '',
                'PartNumber' => '',
                'qty' => '',
                'price' => '',
                'price tolerance' => '',
                'replaces' => '',
                'warehouse' => '',
                'note' => '',
                'DescriptionEnglish' => '',
                'DescriptionRussian' => '',
                'Column 1' => '',
                'Column 2' => '',
                'Column 3' => '',
                'Column 4' => '',
                'Barcode' => '',
                'Information 1' => '',
                'Information 2' => '',
            ]
        ];

        foreach($empties as $empty){
            array_unshift($collect, $empty);
        }

        return collect($collect);
    }

    public function headings(): array
    {
        return [
            'Марка*',
            'Номер*',
            'Количество*',
            'Цена, за шт',
            'Допуск по цене',
            'Замены',
            'Центральные склады',
            'Примечание',
        ];
    }

    public static function beforeSheet(BeforeSheet $event){

        $OrderNumber = OrderNumber::first();
        $event->sheet->appendRows(array(
            array('Данные заказа', ''),
            array('', ''),
            array('Номер:', $OrderNumber->number),
            array('Дата:', ''),
            array('Референс контрагента:*', 'CANLON'),
            array('Соглашение:*', 'CANLON|CPT|Эмираты|USD|Безналичный расчет|Цены без доставки'),
            array('Валюта:*', 'USD'),
            array('Маршрут:*', 'Эмираты|Склад|Шарджа'),
            array('Стоимость / тариф маршрута:*', 'SHJ|Самовывоз ВИВАТ'),
            array('Экспедиция:', ''),
            array('Стоимость / тариф экспедиции:', ''),
            array('Признак отдельной упаковки:', ''),
            array('Комментарий:', ''),
            array('-', ''),
        ), $event);
        $OrderNumber->increment('number', 1);
    }

    public static function afterSheet(afterSheet $event){

        $event->sheet->mergeCells('I15:Q15');
        $event->sheet->mergeCells('O16:Q16');

        $event->sheet->setCellValue('I15', 'Информация клиента (опционально)');
        $event->sheet->setCellValue('I16', 'Английское описание');
        $event->sheet->setCellValue('J16', 'Русское описание');
        $event->sheet->setCellValue('K16', 'Колонка 1');
        $event->sheet->setCellValue('L16', 'Колонка 2');
        $event->sheet->setCellValue('M16', 'Колонка 3');
        $event->sheet->setCellValue('N16', 'Колонка 4');
        $event->sheet->setCellValue('O16','Информация для стикера');
        $event->sheet->setCellValue('O17','Штрих код');
        $event->sheet->setCellValue('P17','Информация 1');
        $event->sheet->setCellValue('Q17','Информация 2');

        $event->sheet->mergeCells('A15:A17');
        $event->sheet->mergeCells('B15:B17');
        $event->sheet->mergeCells('C15:C17');
        $event->sheet->mergeCells('D15:D17');
        $event->sheet->mergeCells('E15:E17');
        $event->sheet->mergeCells('F15:F17');
        $event->sheet->mergeCells('G15:G17');

        $event->sheet->mergeCells('H15:H17');
        $event->sheet->mergeCells('I16:I17');
        $event->sheet->mergeCells('J16:J17');
        $event->sheet->mergeCells('K16:K17');
        $event->sheet->mergeCells('L16:L17');
        $event->sheet->mergeCells('M16:M17');
        $event->sheet->mergeCells('N16:N17');

        $styleCenter = array(
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
            ],
        );

        $styleArray = array(
            'borders' => array(
                'allBorders' => array(
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => array('argb' => '000000'),
                ),
            ),
        );
        $styleBorder = array(
            'borders' => array(
                'outline' => array(
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => array('argb' => '000000'),
                ),
            ),
        );

        $event->sheet->getDelegate()->getStyle('A1:A1')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('f4a460');
        $event->sheet->getDelegate()->getStyle('A1:A1')
                                                        ->getFont()
                                                        ->setBold(true)
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('A1:A1')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('A3:A13')
                                                        ->getFont()
                                                        ->setBold(true)
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('A3:A13')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('f4a460');
        $event->sheet->getDelegate()->getStyle('A3:A13')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('B3:B13')
                                                        ->getFont()
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('B3:B13')->applyFromArray($styleArray);

        ///////////////////////////////////////////////////////////////////
        $event->sheet->getDelegate()->getStyle('A15:H17')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('f4a460');
        $event->sheet->getDelegate()->getStyle('A15:H17')
                                                        ->getFont()
                                                        ->setBold(true)
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('A15:H17')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('A15:H17')->applyFromArray($styleCenter);
        //////////////////////////////////////////////////////////////////////////////////
        $event->sheet->getDelegate()->getStyle('H16:N17')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('f4a460');
        $event->sheet->getDelegate()->getStyle('H16:N17')
                                                        ->getFont()
                                                        ->setBold(true)
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('H16:N17')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('H16:N17')->applyFromArray($styleCenter);
        ////////////////////////////////////////////////////////////////////////////////
        $event->sheet->getDelegate()->getStyle('H15:Q17')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('f4a460');
        $event->sheet->getDelegate()->getStyle('H15:Q17')
                                                        ->getFont()
                                                        ->setBold(true)
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('H15:Q17')->applyFromArray($styleBorder);
        $event->sheet->getDelegate()->getStyle('H15:Q17')->applyFromArray($styleCenter);
        ///////////////////////////////////////////////////////////////////////////////////////////
        $event->sheet->getDelegate()->getStyle('O17:Q17')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('f4a460');
        $event->sheet->getDelegate()->getStyle('O17:Q17')
                                                        ->getFont()
                                                        ->setBold(true)
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('O17:Q17')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('O17:Q17')->applyFromArray($styleCenter);
        /////////////////////////////////////////////////////////////////////////////////////////
        $event->sheet->getDelegate()->getStyle('O16:Q16')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('f4a460');
        $event->sheet->getDelegate()->getStyle('O16:Q16')
                                                        ->getFont()
                                                        ->setBold(true)
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('O16:Q16')->applyFromArray($styleBorder);
        $event->sheet->getDelegate()->getStyle('O16:Q16')->applyFromArray($styleCenter);

        $event->sheet->getStyle('G15')->getAlignment()->setWrapText(true);
        $event->sheet->getStyle('O17')->getAlignment()->setWrapText(true);
        $event->sheet->getStyle('P17')->getAlignment()->setWrapText(true);
        $event->sheet->getStyle('Q17')->getAlignment()->setWrapText(true);        
    }

}
