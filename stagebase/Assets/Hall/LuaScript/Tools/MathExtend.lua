require("Module")
mmodule(...)

function ParseInt(val)
    return math.floor(val + 0.000001)
end

function Pow(v, n)
    if (n == 1) then return v end
    local val = 1
    for i = 1, n, 1 do
        val = val * v
    end
    return val
end


function Decimal(v, num)
    if (num == nil) then num = 0 end
    v = ParseInt(v * Pow(10, num))
    v = v / Pow(10, num)
    return v
end

