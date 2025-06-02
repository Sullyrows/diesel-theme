# Cat Theme Python Preview
import math
from typing import List, Dict, Optional

class ThemeColor:
    """A class representing a color in the theme"""
    
    def __init__(self, name: str, hex_value: str):
        self.name = name
        self.hex_value = hex_value
        
    def __str__(self) -> str:
        return f"{self.name}: {self.hex_value}"
    
    def lighten(self, amount: float = 0.1) -> 'ThemeColor':
        """Return a lightened version of this color"""
        # This is a simplified implementation
        return ThemeColor(f"{self.name}_light", self.hex_value)
        
    def darken(self, amount: float = 0.1) -> 'ThemeColor':
        """Return a darkened version of this color"""
        # This is a simplified implementation
        return ThemeColor(f"{self.name}_dark", self.hex_value)


def generate_color_palette(primary_color: str) -> Dict[str, str]:
    """Generate a full color palette based on the primary color"""
    palette = {
        "primary": primary_color,
        "background": "#1e2127",
        "foreground": "#abb2bf",
    }
    
    # Add more colors to the palette
    for i in range(1, 6):
        palette[f"accent_{i}"] = primary_color  # Simplified
        
    return palette


@staticmethod
def validate_hex_color(color: str) -> bool:
    """Validate if a string is a valid hex color"""
    import re
    pattern = r'^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'
    return bool(re.match(pattern, color))


if __name__ == "__main__":
    # Our theme's primary color
    PRIMARY_COLOR = "#FFC400"
    
    # Generate the palette
    palette = generate_color_palette(PRIMARY_COLOR)
    
    # Create theme color objects
    theme_colors = [ThemeColor(name, value) for name, value in palette.items()]
    
    # Print the theme information
    print(f"Cat Theme - Primary Color: {PRIMARY_COLOR}")
    for color in theme_colors:
        print(f"  - {color}")
