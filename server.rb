require 'sinatra'
enable :sessions

set :public_folder, proc { File.join(root) }

get ('/therm_disp') do

"
#{session[:temp]}
"
end

post ('/therm_disp') do
session[:temp] = params.keys.last
end
