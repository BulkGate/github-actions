<?php declare(strict_types=1);

/**
 * @author Marek Piják 2021 TOPefekt s.r.o.
 * @link https://www.bulkgate.com/
 */

if (@!include __DIR__ . '/../vendor/autoload.php')
{
    echo 'Install Nette Tester using `composer install`';
    exit(1);
}

Tester\Environment::setup();
date_default_timezone_set('Europe/Prague');

function test(\Closure $function, ...$parameters): void
{
    $function(...$parameters);
}