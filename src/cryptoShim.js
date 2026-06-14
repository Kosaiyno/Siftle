exports.createHash = () => {
  return {
    update: () => {
      return {
        digest: () => ""
      };
    }
  };
};

exports.randomBytes = (size) => {
  const bytes = new Uint8Array(size);
  if (typeof window !== "undefined" && window.crypto) {
    window.crypto.getRandomValues(bytes);
  }
  return bytes;
};

const KeyObject = class {};
exports.KeyObject = KeyObject;
exports.createSecretKey = () => new KeyObject();
exports.createPublicKey = () => new KeyObject();
exports.createPrivateKey = () => new KeyObject();
