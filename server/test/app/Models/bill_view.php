<?php

namespace App\Models;

class bill_view
{
    public function __construct($user, $books, $cart) {
        $this->user = $user;
        $this->books = $books;
        $this->cart = $cart;
      }
}