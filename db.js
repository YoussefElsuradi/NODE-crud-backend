const sequelize = new Sequelize('dfvlo44fqd2221', 'vmnssahmeabbak', '9ba166642a6071c500130b68397498fbf621a0a7df156a57f5923e78eeb1d79c', {
    host: 'ec2-34-193-110-25.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // You may need to set this to true on production
      }
    }
});

const db = sequelize;