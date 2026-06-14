class Stream {
  on() { return this; }
  once() { return this; }
  emit() { return true; }
  removeListener() { return this; }

  static Stream = Stream;
  static Readable = class Readable extends Stream {};
  static Writable = class Writable extends Stream {};
  static Duplex = class Duplex extends Stream {};
  static Transform = class Transform extends Stream {};
}

module.exports = Stream;
