local gen = {}

local Rand = Random.new()
local Strings = {
	All = string.split('abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ123456789', "");
	Caps = string.split('ABCDEFGHIJKLMNOPQRSTUVWXYZ', "");
	Letters = string.split('abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ', "");
	Low = string.split('abcdefghijklmnopqrstuvwxy', "");
	Symbols = string.split('!"£$%^&*()_-=+<>/?|\#@:;[]{},.', "")
}

function Generate(length, Strings)
	local RandomString = ''
	for i = 1, length do RandomString ..= Strings[Rand:NextInteger(1, #Strings)] end
	return RandomString
end

function gen.RandomString(length) return Generate(length, Strings.All) end
function gen.RandomCaps(length) return Generate(length, Strings.Caps) end
function gen.RandomLetters(length) return Generate(length, Strings.Letters) end
function gen.RandomLow(length) return Generate(length, Strings.Low) end
function gen.RandomSymbols(length) return Generate(length, Strings.Symbols) end
function gen.Custom(length, String) return Generate(length, string.split(String, "")) end

function gen.Cut(String, Start, End)
	local ToString = string.split(String, '')
	
	for i = 1, #ToString do 
		if i >= Start and i <= End then ToString[i] = "-" end
	end
	
	return table.concat(string.split(table.concat(ToString), "-"))
end

function gen.BrokenString(InBoundLetters)
	local BoundString = '';
	if InBoundLetters == nil then BoundString = Strings.All
	else BoundString = string.split(InBoundLetters, '') end
	
	Rand = Random.new(os.time())
	return Generate(Rand:NextInteger(1, #BoundString), BoundString)
end

function gen.Filter(String, Method)
	local ToString = string.split(String, '')
	local ReString = {};
	
	for i = 1, #ToString do
		table.insert(ReString, Method); table.remove(ToString, i)
	end
	
	return table.concat(ReString)
end

local ScrambledList = {}

function Scrambler(String, s)
	local New = {}
	local Split = string.split(String, s)

	for i = 1, #Split do
		local R = Rand:NextInteger(1, #Split)
		table.insert(New, Split[R]); table.remove(Split, R)
	end
	
	ScrambledList[table.concat(New, s)] = String
	return table.concat(New, s)
end

function gen.ScrambleLetters(String) return Scrambler(String, "") end
function gen.ScrambleWords(String) return Scrambler(String, " ") end
function gen.UnScramble(String) 
	String = ScrambledList[String] or "" 
	ScrambledList[String] = nil
	return String 
end

function gen.RemoveCharInString(String, Letter) return string.gsub(String, Letter, "") end

return gen