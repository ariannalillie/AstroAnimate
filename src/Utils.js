//Used to check if two page element are touching
export const isCollide = (a, b) => {
    var aRect = a && a.getBoundingClientRect();
    var bRect = b && b.getBoundingClientRect();

    return (
      aRect &&
      bRect &&
      !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
      )
    );
  };
