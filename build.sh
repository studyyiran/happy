npm run build
#echo buid finish
# 将关键的文件扔到build里面
#mv buildserver/server.js build/server.js
~/auto/pm2start.sh
scp -ri ~/.ssh/github_studyyiran build root@139.224.2.112:/data/www/hackathon
