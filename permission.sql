INSERT INTO "permission" 
(id, "name", active, created_at, updated_at) VALUES 
(1, 'compra_pedido', true, now(), now()),
(2, 'compra_presupuesto', true, now(), now()),
(3, 'compra_orden', true, now(), now()),
(4, 'compra_gestion', true, now(), now()),
(5, 'compra_libro', true, now(), now()),
(6, 'compra_nota', true, now(), now()),
(7, 'compra_ajuste', true, now(), now()),
(8, 'compra_remision', true, now(), now()),
(9, 'compra_informe', true, now(), now());


INSERT INTO "permission"
(id, "name", active, created_at, updated_at) VALUES 
(10, 'venta_caja', true, now(), now()),
(11, 'venta_arqueo', true, now(), now()),
(12, 'venta_recaudacion', true, now(), now()),
(13, 'venta_gestion', true, now(), now()),
(14, 'venta_libro', true, now(), now()),
(15, 'venta_cobranza', true, now(), now()),
(16, 'venta_remision', true, now(), now()),
(17, 'venta_nota', true, now(), now()),
(18, 'venta_informe', true, now(), now());

INSERT INTO "permission"
(id, "name", active, created_at, updated_at) VALUES 
(19, 'servicio_solicitud', true, now(), now()),
(20, 'servicio_diagnostico', true, now(), now()),
(21, 'servicio_promocion', true, now(), now()),
(22, 'servicio_descuento', true, now(), now()),
(23, 'servicio_reclamo', true, now(), now()),
(24, 'servicio_orden', true, now(), now()),
(25, 'servicio_presupuesto', true, now(), now()),
(26, 'servicio_contrato', true, now(), now()),
(27, 'servicio_insumo', true, now(), now()),
(28, 'servicio_informe', true, now(), now());

INSERT INTO "permission"
(id, "name", active, created_at, updated_at) VALUES 
(29, 'mantenimiento_generico', true, now(), now()),
(30, 'mantenimiento_compra', true, now(), now()),
(31, 'mantenimiento_venta', true, now(), now()),
(32, 'mantenimiento_servicio', true, now(), now()),
(33, 'mantenimiento_admin', true, now(), now());


INSERT INTO "role" 
(id, "name", active, created_at, updated_at) VALUES
(1, 'admin', true, now(), now()),
(2, 'supervisor_compras', true, now(), now()),
(3, 'supervisor_servicios', true, now(), now()),
(4, 'supervisor_ventas', true, now(), now());


INSERT INTO role_detail ("roleId", "permissionId") VALUES
-- admin
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8), (1, 9),
(1, 10), (1, 11), (1, 12), (1, 13), (1, 14), (1, 15), (1, 16), (1, 17), (1, 18),
(1, 19), (1, 20), (1, 21), (1, 22), (1, 23), (1, 24), (1, 25), (1, 26), (1, 27), (1, 28),
(1, 29), (1, 30), (1, 31), (1, 32), (1, 33),

-- supervisor_compras
(2, 1), (2, 2), (2, 3), (2, 4), (2, 5), (2, 6), (2, 7), (2, 8), (2, 9),
(2, 30)

-- supervisor_servicios
(3, 19), (3, 20), (3, 21), (3, 22), (3, 23), (3, 24), (3, 25), (3, 26), (3, 27), (3, 28),
(3, 32),

-- supervisor_ventas
(4, 10), (4, 11), (4, 12), (4, 13), (4, 14), (4, 15), (4, 16), (4, 17), (4, 18)
(4, 31);