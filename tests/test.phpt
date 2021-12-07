<?php declare(strict_types=1);

namespace BulkGate\GithubActions\Test;

/**
 * @author Marek Piják 2021 TOPefekt s.r.o.
 * @link https://www.bulkgate.com/
 */

use Tester\Assert;
use Tester\TestCase;

require __DIR__ . '/bootstrap.php';

class TestTest extends TestCase
{
    public function testExample(): bool
    {
        Assert::true(false);
        return true;
    }
}

(new TestTest)->run();