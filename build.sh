npm run build
#echo buid finish
# 将关键的文件扔到build里面
#mv buildserver/server.js build/server.js
~/auto/pm2start.sh
scp -ri ~/.ssh/github_studyyiran build root@47.56.177.240:/data/frontend/hackathon
