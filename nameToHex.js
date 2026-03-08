function nameToHex(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + color.padStart(6, "0");
}

// Examples
console.log(nameToHex("John Smith"));
console.log(nameToHex("Jane Doe"));
console.log(nameToHex("any length of a random string is supported"));
