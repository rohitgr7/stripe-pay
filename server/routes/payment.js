const router = require('express').Router();
const stripe = require('stripe');

const { stripeSecretKey } = require('./../config');
const { requireLogin } = require('./../middlewares');

const { charges } = stripe(stripeSecretKey);

router.post('/stripe', requireLogin, async (req, res) => {
  const { id } = req.body;
  const charge = await charges.create({
    amount: 500,
    currency: 'usd',
    source: id,
    description: '5$ for 5 credits'
  });

  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});

module.exports = router;
