<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit18c61c1fdb31032da43a7855ebb74540
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'MaxMind\\' => 8,
        ),
        'G' => 
        array (
            'GeoIp2\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'MaxMind\\' => 
        array (
            0 => __DIR__ . '/..' . '/maxmind/web-service-common/src',
        ),
        'GeoIp2\\' => 
        array (
            0 => __DIR__ . '/..' . '/geoip2/geoip2/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'M' => 
        array (
            'MaxMind' => 
            array (
                0 => __DIR__ . '/..' . '/maxmind-db/reader/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit18c61c1fdb31032da43a7855ebb74540::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit18c61c1fdb31032da43a7855ebb74540::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit18c61c1fdb31032da43a7855ebb74540::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
