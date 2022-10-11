#	Ruby
class ProfileImage
    attr_accessor :name, :textColor, :backgroundColor, :fontFamily, :fontSize, :fontWeight
    def initialize(name, options = Hash.new)
        @name = name
        @textColor = options["textColor"] || "#ffffff"
        @backgroundColor = options["backgroundColor"] || "#1f6feb"
        @fontFamily = options["fontFamily"] || "Arial"
        @fontSize = options["fontSize"] || 40
        @fontWeight = options["fontWeight"] || "normal"
    end
    def svg # returns svg as string
        return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' width='100' height='100' style='font-weight: #{@fontWeight};'><rect width='100' height='100' x='0' y='0' fill='#{@backgroundColor}'></rect><text x='50%' y='50%' alignment-baseline='central' text-anchor='middle' font-family='#{@fontFamily}' font-size='#{@fontSize}' fill='#{@textColor}' dominant-baseline='middle'>#{shortName()}</text></svg>"
    end
    def shortName # internal function, shortens the name to first two characters.
        return @name.split(" ").map{|word| word[0]}.join("")[0..1].upcase
    end
    private :shortName
    # png version tbd
end
