::指定 Manifest 文件的主版本号
set v="1.0.0"

::指定服务器远程包的地址，这个地址需要和最初发布版本中 Manifest 文件的远程包地址一致，否则无法检测到更新
set u="http://0.0.0.0/web-mobile/"

::本地原生打包版本的目录相对路径
set s="C:\Users\rayon\Desktop\hot-update-web-master\build\web-mobile"

for /f "tokens=1-4 delims=-/ " %%i IN ("%date%") DO (
set year=%%i
set month=%%j
set day=%%k
)
for /f "tokens=1-4 delims=:." %%i IN ("%time%") DO (
set hour=%%i
set minute=%%j
set second=%%k
set centisecond=%%l
)

::存 Manifest 文件的地址
set d=%~dp0%year%%month%%day%%hour%%minute%%second%%centisecond%


node version_generator.js -v %v% -u %u% -s %s% -d %s%

Pause