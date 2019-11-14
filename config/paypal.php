<?php

return array(
    /** set your paypal credential **/
    // 'client_id' => 'AclKwer7tk9dzAY9J3YOBy-XktXfC08mY5jfLUyxdcA5aHAlFvT-XJHgUbh1KEDPepLYeemMbxZQExBt',
    // 'secret' => 'EDl9elQkBuN2ea5QiQS5ZsEjcZI2-qj6Jtelm8m8L00-yj4frWdGXqQLTDt8n9Fg1lnwM_G55qrUrRzt',
    //'client_id' => 'AYCXgpTuA1iyNAsOwmxjPSTPciwzxFWYg_kV1B0u8a_4UJPeiKiF2aDJDiJ8xUc8q90k0Y79KbFMGv4G',
    //'secret' => 'EKlm5lunWcD9O10ctbc_E6UCyIbTEyjOoz_seKu5Y83WZRCOUJZiYT4xys1fUAcCtRnHHY-dSwEwKsFa',
     'client_id' => 'AVobLRHB4o8KJbYx4Snn9OzscJTKAS2lyS9hXg5UkRzh0APnYlbUy23tyFldq8cVA0V5lpWCGqLaakFT',//Yan
     'secret' => 'EFQ-n8hGTO4HByWcvgvegbxL7zGHAoLavf0Gxa2hMNEFKW-tnAWs7Ym6j1J6Dahsq-S25ha7IJsChKlc',//Yan
    /**
     * SDK configuration
     */
    'settings' => array(
        /**
         * Available option 'sandbox' or 'live'
         */
        'mode' => 'live',
        /**
         * Specify the max request time in seconds
         */
        'http.ConnectionTimeOut' => 1000,
        /**
         * Whether want to log to a file
         */
        'log.LogEnabled' => true,
        /**
         * Specify the file that want to write on
         */
        'log.FileName' => storage_path() . '/logs/paypal.log',
        /**
         * Available option 'FINE', 'INFO', 'WARN' or 'ERROR'
         *
         * Logging is most verbose in the 'FINE' level and decreases as you
         * proceed towards ERROR
         */
        'log.LogLevel' => 'FINE'
    ),
);
