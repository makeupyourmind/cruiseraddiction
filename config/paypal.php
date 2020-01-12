<?php

return array(
    /** set your paypal credential **/
     'client_id' => 'AYCXgpTuA1iyNAsOwmxjPSTPciwzxFWYg_kV1B0u8a_4UJPeiKiF2aDJDiJ8xUc8q90k0Y79KbFMGv4G', //test
     'secret' => 'EKlm5lunWcD9O10ctbc_E6UCyIbTEyjOoz_seKu5Y83WZRCOUJZiYT4xys1fUAcCtRnHHY-dSwEwKsFa', //test
    // 'client_id' => 'AVobLRHB4o8KJbYx4Snn9OzscJTKAS2lyS9hXg5UkRzh0APnYlbUy23tyFldq8cVA0V5lpWCGqLaakFT',//Yan prod
    // 'secret' => 'EFQ-n8hGTO4HByWcvgvegbxL7zGHAoLavf0Gxa2hMNEFKW-tnAWs7Ym6j1J6Dahsq-S25ha7IJsChKlc',//Yan prod
    /**
     * SDK configuration
     */
    'settings' => array(
        /**
         * Available option 'sandbox' or 'live'
         */
        'mode' => 'sandbox',
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
