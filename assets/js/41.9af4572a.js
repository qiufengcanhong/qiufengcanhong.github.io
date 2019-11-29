(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{207:function(e,n,s){"use strict";s.r(n);var r=s(0),t=Object(r.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("// redis配置参数\nlet redis_config = {\n    \"host\": \"127.0.0.1\",\n    \"port\": 6379\n};\n \nlet password = '';     //密码\nlet dbs = {};\nconst redis = require(\"redis\");\nconst client = redis.createClient(redis_config);\nif (password) {\n    client.auth(password, function () {\n        console.log(\"连接成功\")\n    });\n}\nclient.on(\"error\", err => console.log('------ Redis connection failed ------' + err))\n    .on('connect', () => console.log('------ Redis connection succeed ------'));\n \nclient.set('hello','This is a value');\nclient.expire('hello',10) //设置过期时间\nclient.exists('key') //判断键是否存在\nclient.del('key1')\nclient.get('hello');\n \n \n \n//stirng\n命令 行为 返回值 使用示例(略去回调函数)\nset 设置存储在给定键中的值 OK set('key', 'value')\nget 获取存储在给定键中的值 value/null get('key')\ndel 删除存储在给定键中的值(任意类型) 1/0 del('key')\nincrby 将键存储的值加上整数increment incrby('key', increment)\ndecrby 将键存储的值减去整数increment decrby('key', increment)\nincrbyfloat 将键存储的值加上浮点数increment incrbyfloat('key', increment) \nappend 将值value追加到给定键当前存储值的末尾 append('key', 'new-value')\ngetrange 获取指定键的index范围内的所有字符组成的子串 getrange('key', 'start-index', 'end-index')\nsetrange 将指定键值从指定偏移量开始的子串设为指定值 setrange('key', 'offset', 'new-string')\n//list\n命令 行为 返回值 使用示例(略去回调函数)\nrpush 将给定值推入列表的右端 当前列表长度 rpush('key', 'value1' [,'value2']) (支持数组赋值)\nlrange 获取列表在给定范围上的所有值 array lrange('key', 0, -1) (返回所有值)\nlindex 获取列表在给定位置上的单个元素 lindex('key', 1)\nlpop 从列表左端弹出一个值，并返回被弹出的值 lpop('key')\nrpop 从列表右端弹出一个值，并返回被弹出的值 rpop('key')\nltrim 将列表按指定的index范围裁减 ltrim('key', 'start', 'end')\n \n//set\n命令 行为 返回值 使用示例(略去回调函数) sadd 将给定元素添加到集合 插入元素数量 sadd('key', 'value1'[, 'value2', ...]) (不支持数组赋值)(元素不允许重复)\nsmembers 返回集合中包含的所有元素 array(无序) smembers('key')\nsismenber 检查给定的元素是否存在于集合中 1/0 sismenber('key', 'value')\nsrem 如果给定的元素在集合中，则移除此元素 1/0 srem('key', 'value')\nscad 返回集合包含的元素的数量 sacd('key') \nspop 随机地移除集合中的一个元素，并返回此元素 spop('key')\nsmove 集合元素的迁移 smove('source-key'dest-key', 'item')\nsdiff 返回那些存在于第一个集合，但不存在于其他集合的元素(差集) sdiff('key1', 'key2'[, 'key3', ...]) \nsdiffstore 将sdiff操作的结果存储到指定的键中 sdiffstore('dest-key', 'key1', 'key2' [,'key3...]) \nsinter 返回那些同事存在于所有集合中的元素(交集) sinter('key1', 'key2'[, 'key3', ...])\nsinterstore 将sinter操作的结果存储到指定的键中 sinterstore('dest-key', 'key1', 'key2' [,'key3...]) \nsunion 返回那些至少存在于一个集合中的元素(并集) sunion('key1', 'key2'[, 'key3', ...])\nsunionstore 将sunion操作的结果存储到指定的键中 sunionstore('dest-key', 'key1', 'key2' [,'key3...]) \n//hash\n命令 行为 返回值 使用示例(略去回调函数)\nhset 在散列里面关联起给定的键值对 1(新增)/0(更新) hset('hash-key', 'sub-key', 'value') (不支持数组、字符串)\nhget 获取指定散列键的值 hget('hash-key', 'sub-key')\nhgetall 获取散列包含的键值对 json hgetall('hash-key')\nhdel 如果给定键存在于散列里面，则移除这个键 hdel('hash-key', 'sub-key')\nhmset 为散列里面的一个或多个键设置值 OK hmset('hash-key', obj)\nhmget 从散列里面获取一个或多个键的值 array hmget('hash-key', array)\nhlen 返回散列包含的键值对数量 hlen('hash-key')\nhexists 检查给定键是否在散列中 1/0 hexists('hash-key', 'sub-key')\nhkeys 获取散列包含的所有键 array hkeys('hash-key')\nhvals 获取散列包含的所有值 array hvals('hash-key')\nhincrby 将存储的键值以指定增量增加 返回增长后的值 hincrby('hash-key', 'sub-key', increment) (注：假如当前value不为为字符串，则会无输出，程序停止在此处)\nhincrbyfloat 将存储的键值以指定浮点数增加\n \n//zset \n命令 行为 返回值 使用示例(略去回调函数)\nzadd 将一个带有给定分支的成员添加到有序集合中 zadd('zset-key', score, 'key') (score为int)\nzrange 根据元素在有序排列中的位置，从中取出元素\nzrangebyscore 获取有序集合在给定分值范围内的所有元素\nzrem 如果给定成员存在于有序集合，则移除\nzcard 获取一个有序集合中的成员数量 有序集的元素个数 zcard('key')\n \n \nkeys命令组\n命令 行为 返回值 使用示例(略去回调函数)\ndel 删除一个(或多个)keys 被删除的keys的数量 del('key1'[, 'key2', ...])\nexists 查询一个key是否存在 1/0 exists('key')\nexpire 设置一个key的过期的秒数 1/0 expire('key', seconds)\npexpire 设置一个key的过期的毫秒数 1/0 pexpire('key', milliseconds) \nexpireat 设置一个UNIX时间戳的过期时间 1/0 expireat('key', timestamp)\npexpireat 设置一个UNIX时间戳的过期时间(毫秒) 1/0 pexpireat('key', milliseconds-timestamp)\npersist 移除key的过期时间 1/0 persist('key')\nsort 对队列、集合、有序集合排序 排序完成的队列等 sort('key'[, pattern, limit offset count]) \nflushdb 清空当前数据库\n \n// redis事务(支持连贯操作)\n/*\n * 常用命令\n *  multi() 事务\n *  exec([callback]) 执行事务\n *  discard 放弃事务\n *  watch 监视指定的键值\n *  unwatch 取消监视\n * \n * 命令用法：\n *  MULTI\n *      MULTI 命令用于开启一个事务，它总是返回 OK 。 \n *      MULTI 执行之后， 客户端可以继续向服务器发送任意多条命令， \n *      这些命令不会立即被执行， 而是被放到一个队列中， 当 EXEC命令被调用时， 所有队列中的命令才会被执行。\n *      另一方面， 通过调用 DISCARD ， 客户端可以清空事务队列， 并放弃执行事务。\n *  EXEC\n *      EXEC 命令的回复是一个数组， 数组中的每个元素都是执行事务中的命令所产生的回复。 \n *      其中， 回复元素的先后顺序和命令发送的先后顺序一致。\n *  DISCARD\n *      当执行 DISCARD 命令时， 事务会被放弃， 事务队列会被清空， 并且客户端会从事务状态中退出\n *  WATCH\n *      WATCH 命令可以为 Redis 事务提供 check-and-set （CAS）行为。\n *      被 WATCH 的键会被监视，并会发觉这些键是否被改动过了。 \n *      如果有至少一个被监视的键在 EXEC 执行之前被修改了， 那么整个事务都会被取消， \n *      EXEC 返回nil-reply来表示事务已经失败。\n *  \n *      WATCH 使得 EXEC 命令需要有条件地执行： \n *      事务只能在所有被监视键都没有被修改的前提下执行， 如果这个前提不能满足的话，事务就不会被执行。\n *  \n *      WATCH 命令可以被调用多次。 对键的监视从 WATCH 执行之后开始生效， 直到调用 EXEC 为止。\n *\n *      当 EXEC 被调用时， 不管事务是否成功执行， 对所有键的监视都会被取消。\n *      另外， 当客户端断开连接时， 该客户端对键的监视也会被取消。\n *  UNWATCH\n *      使用无参数的 UNWATCH 命令可以手动取消对所有键的监视。\n *\n * 使用示例：\n *  1、连贯操作\n *      client.multi().incr('key').incr('key').exec(function (err, reply) {});\n *\n *  2、常规操作\n *      multi = client.multi();\n *      multi.incr('key');\n *      multi.incr('key');\n *      multi.exec(function (err, replies) {});\n *\n *  3、取巧操作\n *      client.multi([\n *          [\"mget\", \"multifoo\", \"multibar\", redis.print],\n *          [\"incr\", \"multifoo\"],\n *          [\"incr\", \"multibar\"]\n *      ]).exec(function (err, replies) {\n *          console.log(replies);\n *      }); \n *\n */\n \n// 事件监听 \n/*\n * 事件：ready、connect、reconnecting、end、warning、error\n * 执行顺序： ready > connect > end(quit触发)\n * error事件需要设置监听(必选)\n *\n * 使用示例：\n * redisClient.on(\"ready\", function(err) {  \n *  if (err) return false;\n *  console.log(\"ready\");\n * });\n */\n \nredisClient.on(\"error\", function (err) {\n  console.log(\"Error \" + err);\n});\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);