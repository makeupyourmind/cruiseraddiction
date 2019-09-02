<?php

return array(
    /** set your paypal credential **/
    'client_id' =>'AVobLRHB4o8KJbYx4Snn9OzscJTKAS2lyS9hXg5UkRzh0APnYlbUy23tyFldq8cVA0V5lpWCGqLaakFT',
    'secret' => 'EFQ-n8hGTO4HByWcvgvegbxL7zGHAoLavf0Gxa2hMNEFKW-tnAWs7Ym6j1J6Dahsq-S25ha7IJsChKlc',
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