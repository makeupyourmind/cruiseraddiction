<?php

namespace App\Exports;

use App\Model\Order;
use App\Model\OrderNumber;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeWriting;
use Maatwebsite\Excel\Events\BeforeSheet;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Events\BeforeExport;

class OrdersExport implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents, WithValidation 
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    use Exportable, RegistersEventListeners;

    public function __construct($collect)
    {
        $this->collect = $collect;
    }

    public function collection()
    {
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
            array_unshift($this->collect, $empty);
        }

        return collect($this->collect);
    }

    public function headings(): array
    {
        return [
            'Марка',
            'Номер',
            'Количество',
            'Цена, за шт.',
            'Допуск по цене,%',
            'Замены',
            'Центральные склады',
            'Примечание',
        ];
    }

    public static function beforeSheet(BeforeSheet $event){

        $OrderNumber = OrderNumber::first();
        $datetime = date('d.m.Y');
        $event->sheet->appendRows(array(
            array('Данные заказа', 'отправлять на адрес', 'order@vivat-uae.net'),
            array('', ''),
            array('Номер:', '', $OrderNumber->number),
            array('Дата:', '', $datetime),
            array('Референс контрагента:','' , 'CANLON'),
            array('Соглашение:', '', 'CANLON|CPT|Эмираты|USD|Безналичный расчет|Цены без доставки'),
            array('Валюта:','' , 'USD'),
            array('Маршрут:', '', 'Эмираты|Склад|Шарджа'),
            array('Стоимость / тариф маршрута:','' , 'SHJ|Самовывоз ВИВАТ'),
            array('Экспедиция:','' , ''),
            array('Стоимость / тариф экспедиции:','' , ''),
            array('Признак отдельной упаковки:','' , ''),
            array('Комментарий:','' , ''),
            array(' ','' , ''),
        ), $event);
        $OrderNumber->increment('number', 1);
    }

    public function rules(): array
    {
        return [
            '0' => 'required|string',
            '1' => 'required|string',
            '2' => 'required|numeric',
            '3' => 'required|numeric',
        ];
    }

    public static function afterSheet(afterSheet $event){

        // $column = 'B';
        // $event->sheet->getDelegate()->getColumnDimension($column)->setWidth(3);
        // $event->sheet->mergeCells('D1:P1');
        $event->sheet->mergeCells('A3:B3');
        $event->sheet->mergeCells('A4:B4');
        $event->sheet->mergeCells('A5:B5');
        $event->sheet->mergeCells('A6:B6');
        $event->sheet->mergeCells('A7:B7');
        $event->sheet->mergeCells('A8:B8');
        $event->sheet->mergeCells('A9:B9');
        $event->sheet->mergeCells('A10:B10');
        $event->sheet->mergeCells('A11:B11');
        $event->sheet->mergeCells('A12:B12');
        $event->sheet->mergeCells('A13:B13');

        $event->sheet->mergeCells('C5:H5');
        $event->sheet->mergeCells('C6:H6');
        $event->sheet->mergeCells('C7:C7');
        $event->sheet->mergeCells('C8:H8');
        $event->sheet->mergeCells('C9:H9');
        $event->sheet->mergeCells('C10:H10');
        $event->sheet->mergeCells('C11:H11');
        $event->sheet->mergeCells('C13:H13');

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

        $styleLeft = array(
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT
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

        // $event->sheet->getDelegate()->getStyle('D1:P1')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('B1:B1')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C1:C1')->applyFromArray($styleArray);

        $event->sheet->getDelegate()->getStyle('C3:C3')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C3:C3')->applyFromArray($styleLeft);
        
        $event->sheet->getDelegate()->getStyle('C4:C4')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C5:H5')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C6:H6')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C7:C7')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C8:H8')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C9:H9')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C10:H10')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C11:H11')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C12:C12')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('C13:H13')->applyFromArray($styleArray);

        $event->sheet->getStyle('F18:F65535')->applyFromArray([
            'font' => [
                'bold' => true
            ]
        ]);

        $styleFont = array(
            'font' => [
                'name' => 'Calibri',
                'bold' => true,
                'color' => ['rgb' => '0000FF'],
            ],
        );

        $event->sheet->getStyle('B1:B1')->applyFromArray($styleFont);
        $event->sheet->getStyle('C1:C1')->applyFromArray($styleFont);

        $event->sheet->getDelegate()->getStyle('A1:A1')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('fecb6e');
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
                                                        ->getStartColor()->setRGB('fecb6e');
        $event->sheet->getDelegate()->getStyle('A3:A13')->applyFromArray($styleArray);
        $event->sheet->getDelegate()->getStyle('B3:B13')
                                                        ->getFont()
                                                        ->setName('Tahoma')
                                                        ->setSize(10);
        $event->sheet->getDelegate()->getStyle('B3:B13')->applyFromArray($styleArray);

        ///////////////////////////////////////////////////////////////////
        $event->sheet->getDelegate()->getStyle('A15:H17')
                                                        ->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                                                        ->getStartColor()->setRGB('fecb6e');
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
                                                        ->getStartColor()->setRGB('fecb6e');
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
                                                        ->getStartColor()->setRGB('fecb6e');
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
                                                        ->getStartColor()->setRGB('fecb6e');
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
                                                        ->getStartColor()->setRGB('fecb6e');
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
