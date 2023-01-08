<?php

namespace App\Models;

class bill_view
{
    public function __construct($user,$bill, $books, $cart) {
        $this->user = $user;
        $this->bill = $bill;
        $this->books = $books;
        $this->cart = $cart;
      }
}