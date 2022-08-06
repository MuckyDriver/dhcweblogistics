local Players = game:GetService('Players')
local StarterGui = game:GetService('StarterGui')

local ListBox = new("ListBox") => function(ListBox) 
    ListBox.Properties => {
        Size = UDim2.new(0.5, 0, 1, 0),
        Position = Udim2.new(0.5, 0, 0, 0),
        Parent = StarterGui
    }

    for _,Player in ipairs(Players:GetPlayers()) do 
        ListBox:CreateListItem(Player.Name, {
            Text = Player.Name,
            Button = false
        })
    end

    Players.PlayerRemoving:Connect(function(Player)
        local ListItem = ListBox:GetListItem(Player.Name)

        if ListItem then 
            ListItem:Destroy()
        end
    end)

    Players.PlayerAdded:Connect(function(Player)
        ListBox:CreateListItem(Player.Name, {
            Text = Player.Name,
            Button = false
        })
    end)
end

----------------------------------------------------------------
local BetterScrollingFrame = new("Scroller") => function(Scroller) 
    Scroller.Properties => {
        ScrollingHeight = (Scroller.Properties.CanvasSize / 4) -- will split the scrolling amount by 4
    }

    Scroller:CreateItem('News Post %#', {
        Frame = {} => function(Frame) 
            Frame.Properties => {
                Width = {1, 0},
                Height = {0, 400},
                BackgroundColor = Color3.fromRGB(255,255,255)
            }

            Frame:CreateTextBody('Title', {
                Text = "News Post: Roblox",
                Is('h2' or 'h3')
            })

            Frame:CreateTextBody('Post', {
                Text = "Roblox is an amazing game platform with millions of games to play, and unlimited ways to create a game!",
                Is('h4' or 'h5')
            })

            Frame:CreateTextBody('Author', {
                Text = "DHCGamer1055",
                Color = Color3.fromRGB(200, 200, 200),
                Italic = true,
                Is('h5')
            })
        end,
    })
end