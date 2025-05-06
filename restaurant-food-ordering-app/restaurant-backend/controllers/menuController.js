const menu = require('../data/menu.json');

exports.getMenu = (req, res) => {
  res.status(200).json({ success: true, menu });
};

exports.getMenuByCategory = (req, res) => {
  const { category } = req.params;
  const filteredMenu = menu.filter((item) => item.category === category);

  if (filteredMenu.length === 0) {
    return res.status(404).json({ success: false, message: 'No items found in this category' });
  }

  res.status(200).json({ success: true, menu: filteredMenu });
};

exports.getMenuItemDetails = (req, res) => {
  const { itemId } = req.params;
  const item = menu.find((menuItem) => menuItem.id === itemId);

  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }

  res.status(200).json({ success: true, item });
};