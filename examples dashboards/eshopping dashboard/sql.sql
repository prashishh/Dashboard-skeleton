PURCHASES TABLE

> Get count of items, order by price
SELECT item, count(item) as count from purchases group by item order by count;

> Get count of price, order by price
SELECT price, count(price) as count from purchases group by price order by count;

> Customer
SELECT customer, count(customer) as count from purchases group by customer order by count;

> Date
SELECT date, count(date) as count from purchases group by date order by count DESC;

>> Group by month
SELECT item, count(item) as count from purchases WHERE date between '2013-01-01' AND '2013-01-31' group by item order by count
SELECT item, count(item) as count from purchases WHERE date between '2013-02-01' AND '2013-02-31' group by item order by count

>> Sum of month
Select sum(abc. count) as sum from (SELECT count(item) as count from purchases WHERE date between '2013-02-01' AND '2013-02-31' group by item) as abc



VISIT TABLE

> Browser Count
SELECT browser, count(browser) as count from visits group by browser order by count;

> Time spent
SELECT timespent, count(timespent) as count from visits group by timespent order by count DESC;