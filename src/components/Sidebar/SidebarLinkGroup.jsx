// SidebarLinkGroup.js

import React, { useState, useEffect } from 'react';

const SidebarLinkGroup = ({ activeCondition, children, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (activeCondition) {
      setOpen(true);
    }
  }, [activeCondition]);

  return children(handleClick, open);
};

export default SidebarLinkGroup;
