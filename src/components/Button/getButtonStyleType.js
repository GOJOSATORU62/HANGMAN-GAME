function getButtonStyling(styleType) {
  const primaryButtonStyling =
    " bg-blue-500 border border-blue-700 text-white hover:bg-blue-700 hover:border-blue-900";
  const secondaryButtonStyling =
    " bg-gray-500 border border-gray-700 text-white hover:bg-gray-700 hover:border-gray-900";
  const warningButtonStyling =
    " bg-red-500 border border-red-600 text-white hover:bg-red-700 hover:border-red-900";
  const errorButtonStyling =
    " bg-yellow-500 border border-yellow-600 text-white hover:bg-yellow-700 hover:border-yellow";

  if (styleType === "primary") {
    return primaryButtonStyling;
  } else if (styleType === "secondary") {
    return secondaryButtonStyling;
  } else if (styleType === "warning") {
    return warningButtonStyling;
  } else if (styleType === "error") {
    return errorButtonStyling;
  } else {
    return primaryButtonStyling;
  }
}

export default getButtonStyling;
