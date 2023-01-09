SELECT * FROM football_history.penalty_info;

insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0001',1, 1, 'Co');

select pen.id, pen.penalty_code as penaltyCode, pen.corner, pen.result,
p.name as playerName, t.name as teamName 
from penalty_info as pen 
join player as p on p.id = pen.player_id
join team as t on t.id = p.team_id 
where pen.is_deleted = 0 and p.name like '%%'