SELECT * FROM football_history.penalty_info;

insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0001',1, 1, 'Co');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0002',2, 2, 'Khong');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0003',3, 3, 'Co');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0004',4, 4, 'Khong');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0005',5, 5, 'Khong');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0006',6, 2, 'Co');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0007',7, 3, 'Co');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0008',8, 4, 'Co');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0009',8, 5, 'Co');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0010',1, 4, 'Co');
insert into penalty_info(penalty_code, player_id, corner, result) values('PEN-0011',1, 4, 'Co');

select count(pen.result) as countPen, pen.id, pen.penalty_code as penaltyCode, pen.corner, pen.result,
p.name as playerName, t.name as teamName 
from penalty_info as pen 
join player as p on p.id = pen.player_id
join team as t on t.id = p.team_id 
group by pen.player_id
having pen.result = 'co'