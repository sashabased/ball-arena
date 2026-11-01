// Физика столкновений с бесконечной инерцией (без потери скорости)
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    scale(s) {
        this.x *= s;
        this.y *= s;
        return this;
    }

    mag() {
        return Math.hypot(this.x, this.y);
    }

    normalize() {
        const m = this.mag();
        if (m > 0.00001) {
            this.x /= m;
            this.y /= m;
        }
        return this;
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }
}

class PhysicsWorld {
    constructor() {
        // Трение = 1.0 (полное отсутствие потери энергии/скорости)
        this.friction = 1.0;
    }

    // Обработка отскока от стенок арены с сохранением постоянной скорости
    checkWallCollisions(ball, bounds, enemy = null, particles = null) {
        let hit = false;
        let side = null;

        // Левая стенка
        if (ball.pos.x - ball.radius < bounds.left) {
            ball.pos.x = bounds.left + ball.radius;
            ball.vel.x = Math.abs(ball.vel.x);
            hit = true;
            side = 'left';
        }
        // Правая стенка
        else if (ball.pos.x + ball.radius > bounds.right) {
            ball.pos.x = bounds.right - ball.radius;
            ball.vel.x = -Math.abs(ball.vel.x);
            hit = true;
            side = 'right';
        }

        // Верхняя стенка
        if (ball.pos.y - ball.radius < bounds.top) {
            ball.pos.y = bounds.top + ball.radius;
            ball.vel.y = Math.abs(ball.vel.y);
            hit = true;
            side = 'top';
        }
        // Нижняя стенка
        else if (ball.pos.y + ball.radius > bounds.bottom) {
            ball.pos.y = bounds.bottom - ball.radius;
            ball.vel.y = -Math.abs(ball.vel.y);
            hit = true;
            side = 'bottom';
        }

        if (hit) {
            // Предотвращаем скучные строго вертикальные/горизонтальные зацикливания
            if (Math.abs(ball.vel.x) < 0.3) ball.vel.x = (Math.random() > 0.5 ? 0.6 : -0.6);
            if (Math.abs(ball.vel.y) < 0.3) ball.vel.y = (Math.random() > 0.5 ? 0.6 : -0.6);
            // Поддерживаем постоянную заданную скорость шара
            ball.maintainSpeed();
            ball.onWallHit(side, enemy, particles);
        }

        return hit;
    }

    // Упругое столкновение двух шаров с мгновенным сохранением скорости
    resolveBallCollision(b1, b2) {
        // Если вампир находится в сцепке — таран и физические отскоки полностью отключены
        if (b1.vampireLatched || b2.vampireLatched || b1.vampireLatchedBy || b2.vampireLatchedBy) {
            return null;
        }
        const dx = b2.pos.x - b1.pos.x;
        const dy = b2.pos.y - b1.pos.y;
        const dist = Math.hypot(dx, dy);
        const minDist = b1.radius + b2.radius;

        // Пересечение сфер
        if (dist < minDist && dist > 0.0001) {
            const nx = dx / dist;
            const ny = dy / dist;

            // Разделяем шары во избежание застревания
            const overlap = (minDist - dist);
            b1.pos.x -= nx * overlap * 0.5;
            b1.pos.y -= ny * overlap * 0.5;
            b2.pos.x += nx * overlap * 0.5;
            b2.pos.y += ny * overlap * 0.5;

            // Относительная скорость
            const rvx = b2.vel.x - b1.vel.x;
            const rvy = b2.vel.y - b1.vel.y;
            const velAlongNormal = rvx * nx + rvy * ny;

            // Шары уже расходятся
            if (velAlongNormal > 0) return null;

            // Упругий отскок по нормали
            const impulseMag = -(2 * velAlongNormal) / (1 / b1.mass + 1 / b2.mass);
            const impX = impulseMag * nx;
            const impY = impulseMag * ny;

            b1.vel.x -= (1 / b1.mass) * impX;
            b1.vel.y -= (1 / b1.mass) * impY;
            b2.vel.x += (1 / b2.mass) * impX;
            b2.vel.y += (1 / b2.mass) * impY;

            // Гарантируем, что скорость каждого шара остаётся стабильной (бесконечная инерция)
            b1.maintainSpeed();
            b2.maintainSpeed();

            return {
                hitPoint: new Vector2(b1.pos.x + nx * b1.radius, b1.pos.y + ny * b1.radius),
                force: Math.abs(velAlongNormal)
            };
        }

        return null;
    }
}
