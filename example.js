function abbreviateName(name) {
    return (name.split(" ")
    .map((part) => part[0].toUpperCase())
    .join('')
    );
  }
  abbreviateName("swathi rams tamil mithil");