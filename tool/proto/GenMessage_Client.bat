chcp 950
chcp 65001

set ProtoName=GameMsg_LHD

call replace %ProtoName%.proto netproto; %ProtoName%;

call pbjs -t static-module -w commonjs -o %ProtoName%.js %ProtoName%.proto

rem call replace %ProtoName%.js 'var $protobuf = require("protobufjs/minimal");' 'var $protobuf = protobuf;'

pause