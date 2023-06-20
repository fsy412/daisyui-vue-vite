const ORDER = {
  /// The order was completely filled and not placed on the book.
  Filled: 0,
  /// The order was partially filled. The remainder was placed on the book.
  PartialFill: 1,
  /// The order was cancelled.
  Cancelled: 2,
  /// The order was placed on the book. No part of the order was immediately
  /// filled.
  Posted: 3,
  /// The order was not placed and no changes have been made to the
  /// user's account
  Rejected: 4,
}

export { ORDER }
